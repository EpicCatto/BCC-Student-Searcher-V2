# BCC Student Searcher V2
An opensouce easy to use [Bangkok Christian College](http://www.bcc.ac.th/) student search engine which uses an already [public data from school site](https://bss.phatlor.me/dbsource).

## Feature

API Routes read more at [Documentation](https://api-bss.phatlor.me/)
| Route | Method | Input | Return |
| ------------- | ------------- | ------------- | ------------- |
| `/api/dev/scan` | GET | `query.stdid, query.database`  | `JSON (name, id, imagebase64)` |
| `/api/dev/user/create` | GET | `query.cftunnel`  | `JSON (username, token)`  |
| `/api/dev/user/verify` | POST | `req.body.token`  | `JSON (status)`  |
| `/api/dev/user/lsit` | GET | `⛔`  | `JSON (List out all tokens 💀💀💀) removing soon lol`  |

Search Input
| Search With  | Progress |
| ------------- | ------------- |
| Student ID  | ✅  |
| Student Frist-Last Name  | ⛔  |

Search Results
| Result  | Progress |
| ------------- | ------------- |
| Student ID  | ✅  |
| Student Frist-Last Name  | ✅  |
| Student Image  | ✅  |
| Student Level  | ⛔ |
| Student Room  | ⛔ |
| Student Number  | ⛔ |
| Student from which databases year  | ⛔ |

## Getting Started
I hard coded a lot of stuff so uhh feel free to try to get this thing running i might write how to set it up in the future.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## License
This project is subject to the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html). This does only apply for source code located directly in this clean repository. During the development and compilation process, additional source code may be used to which we have obtained no rights. Such code is not covered by the GPL license.

For those who are unfamiliar with the license, here is a summary of its main points. This is by no means legal advice nor legally binding.

*Actions that you are allowed to do:*

- Use
- Share
- Modify

*If you do decide to use ANY code from the source:*

- **You must disclose the source code of your modified work and the source code you took from this project. This means you are not allowed to use code from this project (even partially) in a closed-source (or even obfuscated) application.**
- **Your modified application must also be licensed under the GPL** 
