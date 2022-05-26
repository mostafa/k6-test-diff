const RED = "\u001b[31m";
const GREEN = "\u001b[32m";
const TEAL = "\u001b[36m";
const RESET = "\u001b[0m";

export function printDiff(diff, threshold_percentage) {
    let result = "";

    if (diff.length === 0) {
        result += `${GREEN}No differences found!${RESET}\n`;
        return;
    }

    result += `${RED}diff --json a/baseline.json b/next.json${RESET}\n`;
    result += `${RED}a/baseline.json${RESET}\n`;
    result += `${RED}b/next.json${RESET}\n`;

    diff.forEach((d) => {
        const path = d.path.join(".");
        const rhs = d.rhs === null ? "---" : d.rhs;
        const lhs = d.lhs === null ? "---" : d.lhs;
        let pd = percentDiff(rhs, lhs);

        switch (d.kind) {
            case "E":
                if (threshold_percentage !== undefined && pd > threshold_percentage) {
                    result += `${TEAL}@@ ${path} ${Math.round(pd)}% @@${TEAL}\n`;
                    result += `${RED}-${rhs}${RESET}\n`;
                    result += `${GREEN}+${lhs}${RESET}\n`;
                }
                break;
        }
    });

    return result;
}

export function percentDiff(rhs, lhs) {
    return (lhs * 100) / rhs - 100;
}
