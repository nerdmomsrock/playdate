class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  register = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { email, password } = this.state;
    return (
      <main className="auth">
        <form className="authForm">
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.handleInput(e)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.handleInput}
          />
          <button onClick={(e) => this.login(e)}>Login</button>
          <button onClick={(e) => this.register(e)}>Register</button>
        </form>
      </main>
    );
  }
}
