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
