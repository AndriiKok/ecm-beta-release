# Contributing to Shields

Shields is a community project. We invite your participation through
financial contributions, issues, and pull requests!

## Ways you can help

### Financial contributions

We welcome financial contributions in full transparency on our
[open collective](https://opencollective.com/shields). Anyone can file an
expense. If the expense makes sense for the development of the community, it
will be "merged" into the ledger of our open collective by the core
contributors and the person who filed the expense will be reimbursed.

### Contributing code

This project has quite a backlog of suggestions! If you're new to the project,
maybe you'd like to open a pull request to address one of them:

[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue.svg)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

### Contributing documentation

You can help by improving project's usage and developer instructions.

Tutorials are in [/doc](https://github.com/badges/shields/tree/master/doc):

- When you read the documentation, you can fix mistakes and add your own thoughts.
- When your pull request follows the documentation but the practice changed,
  consider pointing this out and change the documentation for the next person.

API documentation is at [contributing.shields.io](https://contributing.shields.io/):

- This documentation is generated by annotating the code with
  [JSDoc](https://jsdoc.app/about-getting-started.html) comments.
  [Example](https://github.com/badges/shields/blob/b3be4d94d5ef570b8daccfd088c343a958988843/core/base-service/base-json.js#L26-L41)
- Adding a JSDoc comment to some existing code is a great first contribution
  and a good way to familiarize yourself with the codebase

### Helping others

You can help with code review, which reduces bugs, and over time has a
wonderful side effect of making the code more readable and therefore more
approachable. It's also a great way to teach and learn. Feel free to jump in!
Be welcoming, appreciative, and helpful. You can perform first reviews of
simple changes, like badge additions. These are usually tagged with
[service badge][service badge pr tag].

Please review [these impeccable guidelines][code review guidelines].

You can monitor [issues][] and the [chat room][], and help other people who
have questions about contributing to Shields, or using it for their projects.

Feel free to reach out to one of the [maintainers][]
if you need help getting started.

[service badge pr tag]: https://github.com/badges/shields/pulls?q=is%3Apr+is%3Aopen+label%3Aservice-badge
[code review guidelines]: https://kickstarter.engineering/a-guide-to-mindful-communication-in-code-reviews-48aab5282e5e
[issues]: https://github.com/badges/shields/issues
[chat room]: https://discordapp.com/invite/HjJCwm5
[maintainers]: https://github.com/badges/shields#project-leaders

### Suggesting improvements

There are _a lot_ of suggestions on file. You can help by weighing in on these
suggestions, which helps convey community need to other contributors who might
pick them up.

There is no need to post a new comment. Just add a :thumbsup: or :heart: to
the top post.

If you have a suggestion of your own, [search the open issues][issues]. If you
don't see it, feel free to [open a new issue][open an issue].

[open an issue]: https://github.com/badges/shields/issues/new/choose

### Spreading the word

Feel free to star the repository. This will help increase the visibility of the project, therefore attracting more users and contributors to Shields!

We're also asking for [one-time \$10 donations](https://opencollective.com/shields) from developers who use and love Shields, please spread the word!

## Getting help

There are three places to get help:

1. If you're new to the project, a good place to start is the [tutorial][].
2. If you need help getting started or implementing a change, [open an issue][]
   with your question. We promise it's okay to do that. If there is already an
   issue open for the feature you're working on, you can post there.
3. You can also join the [chat room][] and ask your question there.

[tutorial]: doc/TUTORIAL.md

## Badge guidelines

- Shields.io hosts integrations for services which are primarily
  used by developers or which are widely used by developers
- The left-hand side of a badge should not advertise. It should be a lowercase _noun_
  succinctly describing the meaning of the right-hand side.
- Except for badges using the `social` style, logos should be _turned off by
  default_.

## Badge URLs

- The format of new badges should be of the form `/SERVICE/NOUN/PARAMETERS`.
- There is further documentation on this in [badge-urls](https://github.com/badges/shields/blob/master/doc/badge-urls.md)

## Coding guidelines

### Prettier

This project formats its source code using Prettier. The most enjoyable way to
use Prettier is to let it format code for you when you save. You can [integrate
it into your editor][integrate prettier].

Whether you integrate it into your editor or not, a pre-commit hook will run
Prettier before a commit by default.

[integrate prettier]: https://prettier.io/docs/en/editors.html

### Tests

When adding or changing a service [please write tests][service-tests].

When opening a pull request, include your service name in brackets in the pull
request title. That way, those service tests will run in CI.

e.g. **[Travis] Fix timeout issues**

When changing other code, please add unit tests.

To run the integration tests, you must have redis installed and in your PATH.
Use `brew install redis`, `yum install redis`, etc. The test runner will
start the server automatically.

[service-tests]: https://github.com/badges/shields/blob/master/doc/service-tests.md

### Code organization

There is a [High-level code walkthrough](doc/code-walkthrough.md) describing the layout of the project.

### Logos

We have [documentation for logo usage](doc/logos.md) which includes [contribution guidance](doc/logos.md#contributing-logos)
