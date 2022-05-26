import http from "k6/http";
import file from "k6/x/file";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import deepdiff from "https://cdnjs.cloudflare.com/ajax/libs/deep-diff/1.0.2/deep-diff.min.js";
import { detailedDiff } from "./dof.bundle.js";
import { printDiff } from "./print.js";

let baselineFile = null;

try {
    baselineFile = JSON.parse(open("baseline.json"));
} catch (error) {
    console.log("The 'base.json' is not found, so this test will be the baseline test");
}

export default function () {
    http.get("https://test.k6.io");
}

export function handleSummary(data) {
    console.log("Preparing the end-of-test summary...");

    if (baselineFile !== null) {
        console.log("Comparing the current test to the baseline...");
        const diff = deepdiff.diff(baselineFile, data);
        const jsonDiff = JSON.stringify(diff);
        file.writeString("diff.json", jsonDiff);

        console.log("Generate a detailed diff report...");
        const jsonObjDiff = JSON.stringify(detailedDiff(baselineFile, data));
        file.writeString("detailed-diff.json", jsonObjDiff);

        console.log("\n" + printDiff(diff) + "\n");
    }

    let fileName = baselineFile === null ? "baseline.json" : "next.json";
    return {
        stdout: textSummary(data, { indent: " ", enableColors: true }),
        [fileName]: JSON.stringify(data),
    };
}
