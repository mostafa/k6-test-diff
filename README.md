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

The first time the `baseline.json` doesn't exist, so the test will create it with the `handleSummary` function. The second time the `baseline.json` exists, so the `handleSummary` will compare the current test results against the baseline test and store two files:

1) `diff.json`: contains the diff of two result summaries.
2) `detailed-diff.json`: contains the diff of updated values in the second test's result summary against the baseline.
