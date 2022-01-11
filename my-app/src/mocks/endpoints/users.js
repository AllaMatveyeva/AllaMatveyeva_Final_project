import { rest } from "msw";
import { decodeToken } from "../helpers/authHelper";
import { registerUsers } from "../registerUsers";

const users = [
  {
    login: "railsjitsu",
    id: 32,
    node_id: "MDQ6VXNlcjMy",
    avatar_url: "https://avatars.githubusercontent.com/u/32?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/railsjitsu",
    html_url: "https://github.com/railsjitsu",
    followers_url: "https://api.github.com/users/railsjitsu/followers",
    following_url:
      "https://api.github.com/users/railsjitsu/following{/other_user}",
    gists_url: "https://api.github.com/users/railsjitsu/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/railsjitsu/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/railsjitsu/subscriptions",
    organizations_url: "https://api.github.com/users/railsjitsu/orgs",
    repos_url: "https://api.github.com/users/railsjitsu/repos",
    events_url: "https://api.github.com/users/railsjitsu/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/railsjitsu/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "nitay",
    id: 34,
    node_id: "MDQ6VXNlcjM0",
    avatar_url: "https://avatars.githubusercontent.com/u/34?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/nitay",
    html_url: "https://github.com/nitay",
    followers_url: "https://api.github.com/users/nitay/followers",
    following_url: "https://api.github.com/users/nitay/following{/other_user}",
    gists_url: "https://api.github.com/users/nitay/gists{/gist_id}",
    starred_url: "https://api.github.com/users/nitay/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/nitay/subscriptions",
    organizations_url: "https://api.github.com/users/nitay/orgs",
    repos_url: "https://api.github.com/users/nitay/repos",
    events_url: "https://api.github.com/users/nitay/events{/privacy}",
    received_events_url: "https://api.github.com/users/nitay/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "kevwil",
    id: 35,
    node_id: "MDQ6VXNlcjM1",
    avatar_url: "https://avatars.githubusercontent.com/u/35?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kevwil",
    html_url: "https://github.com/kevwil",
    followers_url: "https://api.github.com/users/kevwil/followers",
    following_url: "https://api.github.com/users/kevwil/following{/other_user}",
    gists_url: "https://api.github.com/users/kevwil/gists{/gist_id}",
    starred_url: "https://api.github.com/users/kevwil/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kevwil/subscriptions",
    organizations_url: "https://api.github.com/users/kevwil/orgs",
    repos_url: "https://api.github.com/users/kevwil/repos",
    events_url: "https://api.github.com/users/kevwil/events{/privacy}",
    received_events_url: "https://api.github.com/users/kevwil/received_events",
    type: "User",
    site_admin: false,
  },
];

export const usersEndpoints = [
  rest.get("/api/users", (req, res, ctx) => {
    try {
      const token = req.headers._headers.authentication?.split("Basic ")[1];
      const login = decodeToken(token);

      const user = registerUsers.find((item) => item.login === login);

      if (!user) {
        throw new Error();
      }
      return res(ctx.json(users));
    } catch {
      return res((res) => {
        res.status = 403;
        res.statusText = "Forbidden";
        return res;
      });
    }
  }),
];
