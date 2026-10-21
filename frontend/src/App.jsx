import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  ArrowLeft,
  Eye,
  EyeOff,
  LayoutDashboard,
  MessageCircle,
  History,
  Gauge,
  LogOut,
  ArrowUpRight,
  Globe,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Send
} from "lucide-react";
import "./App.css";
import "./Auth.css";

// ---------------- LANDING PAGE ----------------

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link to="/" className="brand">
          <ShieldCheck size={30} />
          <span>CyberSaarthi</span>
        </Link>

        <div className="landing-actions">
          <Link to="/login" className="login-link">
            Log In
          </Link>
          <Link to="/register" className="primary-button">
            Get Started <ArrowUpRight size={17} />
          </Link>
        </div>
      </header>

      <main className="landing-content">
        <div className="hero-icon">
          <ShieldCheck size={74} strokeWidth={1.4} />
        </div>

        <div className="status-pill">
          <span className="status-dot" />
          WEB SECURITY ASSESSMENT
        </div>

        <h1>
          Secure your website.
          <br />
          <span>Protect your future.</span>
        </h1>

        <p className="hero-description">
          CyberSaarthi helps you identify website security weaknesses,
          understand risks, and discover practical steps to improve
          your security.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="primary-button hero-button">
            Start Your Assessment <ArrowUpRight size={18} />
          </Link>
          <Link to="/login" className="secondary-button">
            Sign In
          </Link>
        </div>

        <div className="landing-features">
          <span><CheckCircle2 size={16} /> Security checks</span>
          <span><CheckCircle2 size={16} /> Risk assessment</span>
          <span><CheckCircle2 size={16} /> Remediation guidance</span>
        </div>
      </main>

      <footer className="landing-footer">
        CyberSaarthi · Web Security Assessment and Risk Reporting Platform
      </footer>
    </div>
  );
}

// ---------------- AUTH BACKGROUND ----------------

function AuthBackground({ children }) {
  return (
    <div className="auth-page">
      <Link to="/" className="auth-brand">
        <ShieldCheck size={28} />
        <span>CyberSaarthi</span>
      </Link>
      <div className="auth-card">{children}</div>
      <p className="auth-footer">Your security journey starts here.</p>
    </div>
  );
}

// ---------------- LOGIN PAGE ----------------

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    // Demo login only. No real authentication is performed.
    navigate("/dashboard");
  }

  return (
    <AuthBackground>
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Back to home
      </Link>

      <div className="auth-heading-icon">
        <LockKeyhole size={27} />
      </div>

      <h1>Welcome back</h1>
      <p className="auth-subtitle">Log in to your CyberSaarthi account.</p>

      <form onSubmit={handleLogin} className="auth-form">
        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className="password-label-row">
          <label htmlFor="login-password">Password</label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <div className="password-input-wrap">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="auth-submit">
          Log In <ArrowUpRight size={17} />
        </button>
      </form>

      <p className="auth-switch">
        Don't have an account? <Link to="/register">Create one</Link>
      </p>
    </AuthBackground>
  );
}

// ---------------- REGISTER PAGE ----------------

function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please complete all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    // Demo registration only. No account is stored.
    navigate("/dashboard");
  }

  return (
    <AuthBackground>
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Back to home
      </Link>

      <div className="auth-heading-icon">
        <ShieldCheck size={28} />
      </div>

      <h1>Create your account</h1>
      <p className="auth-subtitle">
        Start understanding your website security.
      </p>

      <form onSubmit={handleRegister} className="auth-form">
        <label htmlFor="register-name">Full name</label>
        <input
          id="register-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="register-email">Email address</label>
        <input
          id="register-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <div className="password-input-wrap">
          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 6 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="auth-submit">
          Create Account <ArrowUpRight size={17} />
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthBackground>
  );
}

// ---------------- FORGOT PASSWORD PAGE ----------------

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "This demo does not send emails yet. Password recovery can be connected to the backend later."
    );
  }

  return (
    <AuthBackground>
      <Link to="/login" className="back-link">
        <ArrowLeft size={16} /> Back to login
      </Link>

      <div className="auth-heading-icon">
        <LockKeyhole size={27} />
      </div>

      <h1>Forgot password?</h1>
      <p className="auth-subtitle">
        Enter your email to begin password recovery.
      </p>

      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="forgot-email">Email address</label>
        <input
          id="forgot-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        {message && <p className="form-message">{message}</p>}

        <button type="submit" className="auth-submit">
          Continue <ArrowUpRight size={17} />
        </button>
      </form>
    </AuthBackground>
  );
}

// ---------------- DASHBOARD ----------------
function DashboardPage() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("chat");
  const [targetUrl, setTargetUrl] = useState("");
  const [scanStarted, setScanStarted] = useState(false);
 const [chatMessage, setChatMessage] = useState("");

const [chats, setChats] = useState([
  {
    id: 1,
    title: "New Chat",
    messages: []
  }
]);

const [activeChatId, setActiveChatId] = useState(1);

const activeChat = chats.find((chat) => chat.id === activeChatId);

const messages = activeChat?.messages || [];
  const history = [
    { url: "example.com", date: "Today", score: 72 },
    { url: "demo-site.org", date: "Yesterday", score: 85 },
    { url: "sample-web.net", date: "12 Oct 2026", score: 61 }
  ];

  const menuItems = [
    { id: "newchat", label: "New Chat", icon: MessageCircle },
   
    { id: "score", label: "Security Score", icon: Gauge },
    { id: "history", label: "Previous History", icon: History }
  ];

  const pageTitles = {
    chat: "AI Chat",
    scan: "Start New Scan",
    score: "Security Score",
    history: "Previous History"
  };

  function openSection(section) {
  if (section === "newchat") {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: []
    };

    setChats((previous) => [...previous, newChat]);
    setActiveChatId(newChat.id);
    setChatMessage("");
    setActiveSection("chat");
    return;
  }

  setActiveSection(section);

  if (section === "scan") {
    setScanStarted(false);
  }
}

function handleUrlSubmit(event) {
  event.preventDefault();

  const url = targetUrl.trim();
  if (!url) return;

  const newMessages = [
    {
      from: "user",
      text: `Please assess this website: ${url}`,
    },
    {
      from: "assistant",
      text: `🔍 Scanning your website...\n\nTarget: ${url}\n\nCyberSaarthi is checking the website's security configuration. Please wait while the assessment is processed.`,
    },
  ];

  setChats((previous) =>
    previous.map((chat) =>
      chat.id === activeChatId
        ? {
            ...chat,
            title:
              chat.messages.length === 0 ? url : chat.title,
            messages: [...chat.messages, ...newMessages],
          }
        : chat
    )
  );

  setTargetUrl("");
}

  function handleStartScan(event) {
    event.preventDefault();

    if (!targetUrl.trim()) return;

    // Demo only: no live scanner is connected yet.
    setScanStarted(true);
  }

  function sendMessage(event) {
  event.preventDefault();

  const question = chatMessage.trim();
  if (!question || !activeChat) return;

  const response = {
    from: "assistant",
    text: "This is a demo response. Connect your AI backend to provide website security guidance."
  };

  setChats((previous) =>
    previous.map((chat) =>
      chat.id === activeChatId
        ? {
            ...chat,
            title:
              chat.messages.length === 0
                ? question.slice(0, 35)
                : chat.title,
            messages: [
              ...chat.messages,
              { from: "user", text: question },
              response
            ]
          }
        : chat
    )
  );

  setChatMessage("");
}

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-brand">
          <ShieldCheck size={29} />
          <span>CyberSaarthi</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        <nav>
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`sidebar-item ${
                (activeSection === id ||
                  (id === "newchat" && activeSection === "chat"))
                  ? "active"
                  : ""
              }`}
              onClick={() => openSection(id)}
            >
              <Icon size={19} />
              {label}
            </button>
          ))}
        </nav>
          <div className="chat-history-sidebar">
  <p className="sidebar-label">YOUR CHATS</p>

  {chats.map((chat) => (
    <button
      key={chat.id}
      type="button"
      className={`sidebar-item ${
        activeChatId === chat.id && activeSection === "chat"
          ? "active"
          : ""
      }`}
      onClick={() => {
        setActiveChatId(chat.id);
        setActiveSection("chat");
        setChatMessage("");
      }}
    >
      <MessageCircle size={17} />
      <span className="chat-history-title">{chat.title}</span>
    </button>
  ))}
</div>
        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">CS</div>
            <div>
              <strong>CyberSaarthi User</strong>
              <span>Demo account</span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-item logout-button"
            onClick={() => navigate("/")}
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="breadcrumb">Workspace / Dashboard</p>
            <h1>{pageTitles[activeSection] || "AI Chat"}</h1>
          </div>

          <div className="topbar-status">
            <span className="status-dot" />
            Demo workspace
          </div>
        </header>

        <div className="dashboard-content">

          {/* AI CHAT HOME */}
          {/* AI CHAT HOME */}
{activeSection === "chat" && (
  <section className="chat-home">
    {messages.length === 0 ? (
      <div className="chat-welcome">
        <div className="chat-welcome-mark">
          <ShieldCheck size={28} />
        </div>

        <h2>What can I help you secure?</h2>

        <p>
          Enter a website URL to get started with CyberSaarthi.
        </p>
      </div>
    ) : (
      <div className="chat-conversation">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.from}`}
          >
            {message.from === "assistant" && (
              <ShieldCheck size={20} />
            )}

            <div style={{ whiteSpace: "pre-wrap" }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
    )}

    <form
      className="url-start-form"
      onSubmit={handleUrlSubmit}
    >
      <Globe size={21} />

      <input
        type="url"
        required
        aria-label="Website URL"
        placeholder="Enter a website URL (https://example.com)"
        value={targetUrl}
        onChange={(event) => setTargetUrl(event.target.value)}
      />

      <button
        type="submit"
        aria-label="Continue to security scan"
      >
        <ArrowUpRight size={21} />
      </button>
    </form>
  </section>
)}

          {/* START NEW SCAN */}
          {activeSection === "scan" && (
            <section className="content-panel scan-panel">
              {!scanStarted ? (
                <>
                  <div className="panel-icon">
                    <Globe size={25} />
                  </div>

                  <h2>Start a new security assessment</h2>

                  <p>
                    Enter a website you own or have permission to test.
                  </p>

                  <form className="scan-form" onSubmit={handleStartScan}>
                    <label htmlFor="target-url">Website URL</label>

                    <input
                      id="target-url"
                      type="url"
                      required
                      placeholder="https://example.com"
                      value={targetUrl}
                      onChange={(event) => setTargetUrl(event.target.value)}
                    />

                    <button type="submit" className="primary-button">
                      Start New Scan <ArrowUpRight size={17} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="scan-demo-result">
                  <div className="panel-icon">
                    <CheckCircle2 size={25} />
                  </div>

                  <h2>Scan request recorded</h2>

                  <p>Target: {targetUrl}</p>

                  <p>
                    This is a demo. Connect your scanner backend to run
                    security checks and generate actual findings.
                  </p>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => {
                      setTargetUrl("");
                      setScanStarted(false);
                    }}
                  >
                    Scan Another Website
                  </button>

                  <button
                    type="button"
                    className="outline-button"
                    onClick={() => openSection("chat")}
                  >
                    Return to AI Chat
                  </button>
                </div>
              )}
            </section>
          )}

          {/* SECURITY SCORE */}
          {activeSection === "score" && (
            <>
              <section className="content-panel detailed-score-panel">
                <div className="card-title">
                  <Gauge size={20} />
                  Security Score
                </div>

                <div className="large-score">
                  72<span>/100</span>
                </div>

                <div className="score-track">
                  <div className="score-fill" />
                </div>

                <p className="score-caption">
                  Sample score for the dashboard preview.
                </p>
              </section>

              <section className="content-panel">
                <h2>Issue Severity Breakdown</h2>

                <div className="risk-count-grid">
                  <div className="risk-count critical">
                    <strong>1</strong>
                    <span>Critical</span>
                  </div>

                  <div className="risk-count high">
                    <strong>2</strong>
                    <span>High</span>
                  </div>

                  <div className="risk-count medium">
                    <strong>4</strong>
                    <span>Medium</span>
                  </div>

                  <div className="risk-count low">
                    <strong>3</strong>
                    <span>Low</span>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* PREVIOUS HISTORY */}
          {activeSection === "history" && (
            <section className="content-panel">
              <h2>Previous Assessments</h2>

              <p className="panel-description">
                Example history entries for the dashboard preview.
              </p>

              <div className="history-list">
                {history.map((item) => (
                  <div className="history-row" key={item.url}>
                    <div className="history-icon">
                      <Globe size={20} />
                    </div>

                    <div className="history-info">
                      <strong>{item.url}</strong>
                      <span>{item.date}</span>
                    </div>

                    <div className="history-score">
                      <strong>{item.score}/100</strong>
                      <span>Demo result</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

// ---------------- APP ROUTES ----------------

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;

