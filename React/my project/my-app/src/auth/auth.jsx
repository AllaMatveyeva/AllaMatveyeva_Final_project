const users = [{ login: "Alla", password: "1flla", id: 1 }];
const worker = setupWorker(
  rest.post("api/login", (req, res, ctx) => {
    const { login, password } = req.body;
    const user = users.find(
      (item) => item.login === login && item.password === password
    );
    if (!user) {
      return (res) => {
        return res;
      };
    } else {
      const body = {
        user,
      };

      return res(ctx.json(body));
    }
  })
);
