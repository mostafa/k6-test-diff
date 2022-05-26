# k6-diff-test

This repository contains scripts to show how to create a baseline test and then compare the results with further tests (of the same script). It uses [deep-diff](https://github.com/flitbit/diff) and [deep-object-diff](https://github.com/mattphillips/deep-object-diff) libraries to determine the difference between your baseline test's end-of-test summary and your current one.

I also use the [xk6-file](https://github.com/avitalique/xk6-file) extension to write the diffs into JSON files and you can build a k6 binary with this command:

```bash
xk6 build --with github.com/avitalique/xk6-file@latest
```

And then run two tests using this command.

```bash
./k6 run script.js
```

The first time the `baseline.json` doesn't exist, so the test will create it with the `handleSummary` function. The second time the `baseline.json` exists, so the `handleSummary` will compare the current test results, `next.json` against the baseline test and store a few files:

1. `baseline.json`: the result summary of the baseline test.
2. `next.json`: the results summary of the further tests.
3. `diff.json`: the diff of two result summaries between `baseline.json` and `next.json`.
4. `detailed-diff.json`: the diff of updated values between `baseline.json` and `next.json`.

Note that before running the script, you need to go into the `deep-object-diff` directory and run `yarn` to install the dependencies. Then you'll be able to run `yarn run bundle` to build the `deep-object-diff/dist/dof.bundle.js` file needed for the `script.js` to generate the `detailed-diff.json` file. I already built it and bundled it here.

The test will print this in the console:

```bash
diff --json a/baseline.json b/next.json
a/baseline.json
b/next.json
@@ state.testRunDurationMs 7% @@
-359.354457
+384.960192
@@ metrics.iteration_duration.values.avg 7% @@
-356.257663
+381.627037
@@ metrics.iteration_duration.values.min 7% @@
-356.257663
+381.627037
@@ metrics.iteration_duration.values.med 7% @@
-356.257663
+381.627037
@@ metrics.iteration_duration.values.max 7% @@
-356.257663
+381.627037
@@ metrics.iteration_duration.values.p(90) 7% @@
-356.257663
+381.627037
@@ metrics.iteration_duration.values.p(95) 7% @@
-356.257663
+381.627037
@@ metrics.http_req_sending.values.p(90) 14% @@
-0.13094
+0.148664
@@ metrics.http_req_sending.values.p(95) 14% @@
-0.13094
+0.148664
@@ metrics.http_req_sending.values.avg 14% @@
-0.13094
+0.148664
@@ metrics.http_req_sending.values.min 14% @@
-0.13094
+0.148664
@@ metrics.http_req_sending.values.med 14% @@
-0.13094
+0.148664
@@ metrics.http_req_sending.values.max 14% @@
-0.13094
+0.148664
@@ metrics.http_req_receiving.values.p(95) 46% @@
-0.288
+0.420112
@@ metrics.http_req_receiving.values.avg 46% @@
-0.288
+0.420112
@@ metrics.http_req_receiving.values.min 46% @@
-0.288
+0.420112
@@ metrics.http_req_receiving.values.med 46% @@
-0.288
+0.420112
@@ metrics.http_req_receiving.values.max 46% @@
-0.288
+0.420112
@@ metrics.http_req_receiving.values.p(90) 46% @@
-0.288
+0.420112
@@ metrics.http_req_blocked.values.avg 10% @@
-257.224647
+283.53681
@@ metrics.http_req_blocked.values.min 10% @@
-257.224647
+283.53681
@@ metrics.http_req_blocked.values.med 10% @@
-257.224647
+283.53681
@@ metrics.http_req_blocked.values.max 10% @@
-257.224647
+283.53681
@@ metrics.http_req_blocked.values.p(90) 10% @@
-257.224647
+283.53681
@@ metrics.http_req_blocked.values.p(95) 10% @@
-257.224647
+283.53681
```
