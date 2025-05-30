# Contributing to KPI

We'd love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)).
We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update (or create!) the documentation.
4. Ensure the test suite passes - wait for CI or run everything locally in a container:
   ```sh
   cd kobo-install
   ./run.py
   ./run.py -cf exec kpi ./scripts/ci_locally.sh
   ```
5. Make sure your code lints.
6. Issue that pull request and follow the pull request template!

## Any contributions you make will be under the GNU Affero General Public License

In short, when you submit code changes, your submissions are understood to be under the same [GNU Affero General Public License](./LICENSE) that covers the project.
Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issues](https://github.com/kobotoolbox/kpi/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/kobotoolbox/kpi/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## Code style Guidelines

Automatic lint rules are written using a linter configuration, see:
- [`.editorconfig`](./.editorconfig) (global)
- [`.eslintrc.js`](./.eslintrc.js) (frontend)
- [`.stylelintrc.js`](./.stylelintrc.js) (frontend)
- [`coffeelint.json`](./coffeelint.json) (frontend)

Manual lint rules are written in coding style files, see:
- [`CODING_STYLE_FE.md`](./CODING_STYLE_FE.md)
- [`CODING_STYLE_BE.md`](./CODING_STYLE_BE.md)

Code style guideline principles:
- PR *must pass* linter CI job based on automatic linter rules
- PR *must resolve* all reviewer requests based on manual linter rules
- Reviewer's code style comments not based on manual linter rules are *optional*
