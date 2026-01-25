import { useState, useRef, useEffect } from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { Check, Flag } from "lucide-react";
import { techStack } from "#constants";
import useWindowStore from "#store/window";

const OPENABLE_APPS = {
  resume: "resume",
  finder: "finder",
  safari: "safari",
  photos: "photos",
  terminal: "terminal",
  contact: "contact",
};

const COMMANDS = {
  help: () => (
    <div className="space-y-1">
      <p>Available commands:</p>
      <p>
        <span className="font-mono">help</span> — show commands
      </p>
      <p>
        <span className="font-mono">skills</span> — show tech stack
      </p>
      <p>
        <span className="font-mono">clear</span> — clear terminal
      </p>
      <p className="mt-2">Open apps:</p>
      <p className="font-mono text-sm">
        open finder · open resume · open safari · open photos
      </p>
    </div>
  ),

  skills: () => (
    <div className="space-y-3">
      {techStack.map(({ category, items }) => (
        <div key={category} className="flex gap-4">
          <Check size={16} className="text-green-600 mt-1" />
          <div>
            <p className="font-semibold">{category}</p>
            <p className="text-sm text-gray-600">{items.join(", ")}</p>
          </div>
        </div>
      ))}

      <p className="flex items-center gap-2 text-sm text-gray-500 mt-3">
        <Flag size={14} /> Loaded {techStack.length} categories
      </p>
    </div>
  ),
};

const Terminal = () => {
  const { openWindow } = useWindowStore();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to GaganOS Terminal" },
    { type: "system", content: "Type `help` to see available commands" },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd) => {
    const normalized = cmd.trim().toLowerCase();
    if (!normalized) return;

    // clear
    if (normalized === "clear") {
      setHistory([]);
      return;
    }

    // open <app> OR <app>
    const parts = normalized.split(" ");
    const target = parts[0] === "open" ? parts[1] : parts[0];

    if (OPENABLE_APPS[target]) {
      openWindow(OPENABLE_APPS[target]);

      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        {
          type: "output",
          content: `Opening ${target}…`,
        },
      ]);
      return;
    }

    // built-in commands
    const commandFn =
      COMMANDS[normalized] || (normalized === "show skills" && COMMANDS.skills);

    if (commandFn) {
      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        { type: "output", content: commandFn() },
      ]);
    } else {
      setHistory((h) => [
        ...h,
        { type: "command", content: cmd },
        {
          type: "error",
          content: `command not found: ${cmd}`,
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Terminal</h2>
      </div>

      <div className="techstack font-mono text-sm h-[360px] overflow-y-auto p-4 space-y-2 select-text">
        {history.map((item, i) => (
          <div key={i}>
            {item.type === "command" && (
              <p>
                <span className="font-bold">@Gagans-MacBook-Pro % </span>
                {item.content}
              </p>
            )}

            {item.type === "output" && (
              <div className="ml-4 text-gray-800">{item.content}</div>
            )}

            {item.type === "error" && (
              <p className="ml-4 text-red-500">{item.content}</p>
            )}

            {item.type === "system" && (
              <p className="text-gray-500">{item.content}</p>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="font-bold">@Gagans-MacBook-Pro %</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
          />
        </form>

        <div ref={bottomRef} />
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
