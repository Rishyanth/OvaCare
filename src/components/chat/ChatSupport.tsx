import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, User, Bot } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Mock responses based on keywords
const getMockResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("pcos") && lowerMessage.includes("symptom")) {
    return "Common symptoms of PCOS include irregular periods, excess androgen (causing acne or excess hair growth), polycystic ovaries, weight gain, and difficulty getting pregnant. If you're experiencing these symptoms, it's important to consult with a healthcare provider for proper diagnosis.";
  }

  if (lowerMessage.includes("pcod") && lowerMessage.includes("symptom")) {
    return "PCOD symptoms often include irregular periods, ovarian cysts, pelvic pain, and hormonal imbalances. The symptoms can vary in severity from person to person. A healthcare provider can help diagnose and create a management plan.";
  }

  if (
    lowerMessage.includes("diet") &&
    (lowerMessage.includes("pcos") || lowerMessage.includes("pcod"))
  ) {
    return "For PCOS/PCOD, a diet low in refined carbohydrates and sugars can help manage insulin resistance. Focus on high-fiber foods, lean proteins, healthy fats, and anti-inflammatory foods. Specific recommendations are available in your personalized management plan.";
  }

  if (
    lowerMessage.includes("exercise") &&
    (lowerMessage.includes("pcos") || lowerMessage.includes("pcod"))
  ) {
    return "Regular exercise is beneficial for PCOS/PCOD. A combination of moderate cardio (like walking or swimming) and strength training can help improve insulin sensitivity. Yoga and low-impact exercises can also help reduce stress and manage symptoms.";
  }

  if (
    lowerMessage.includes("treatment") ||
    lowerMessage.includes("medication")
  ) {
    return "Treatment options for PCOS/PCOD may include lifestyle changes, hormonal birth control to regulate periods, anti-androgen medications, and metformin for insulin resistance. The specific treatment depends on your symptoms and whether you're trying to conceive. Always consult with a healthcare provider for medical advice.";
  }

  if (
    lowerMessage.includes("pregnant") ||
    lowerMessage.includes("fertility") ||
    lowerMessage.includes("conceive")
  ) {
    return "PCOS/PCOD can affect fertility, but many women with these conditions can still get pregnant. Treatments may include lifestyle changes, medications to induce ovulation, or assisted reproductive technologies. Working with a fertility specialist is recommended if you're trying to conceive.";
  }

  return "I'm here to help answer your questions about PCOS, PCOD, and reproductive health. You can ask about symptoms, management strategies, diet, exercise, or any other related topics. How can I assist you today?";
};

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your OvaCare AI assistant. How can I help you with your reproductive health questions today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getMockResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">AI Chat Support</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>OvaCare Assistant</CardTitle>
            <CardDescription>
              Ask questions about PCOS, PCOD, symptoms, management strategies,
              or reproductive health.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] overflow-y-auto p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex max-w-[80%] rounded-lg p-4 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-muted"
                      }`}
                    >
                      <div className="mr-2 mt-0.5">
                        {message.sender === "user" ? (
                          <User className="h-5 w-5" />
                        ) : (
                          <Bot className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center space-x-2">
              <textarea
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
              />
              <Button type="submit" size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("What are the common symptoms of PCOS?")
                  }
                >
                  What are the common symptoms of PCOS?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("How is PCOD different from PCOS?")
                  }
                >
                  How is PCOD different from PCOS?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("Can diet help manage PCOS symptoms?")
                  }
                >
                  Can diet help manage PCOS symptoms?
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("What exercises are best for PCOS?")
                  }
                >
                  What exercises are best for PCOS?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("Are there medications for PCOD?")
                  }
                >
                  Are there medications for PCOD?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("How can I reduce PCOS-related stress?")
                  }
                >
                  How can I reduce PCOS-related stress?
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fertility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => setInputValue("Can I get pregnant with PCOS?")}
                >
                  Can I get pregnant with PCOS?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => setInputValue("Does PCOD affect fertility?")}
                >
                  Does PCOD affect fertility?
                </li>
                <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    setInputValue("What fertility treatments work with PCOS?")
                  }
                >
                  What fertility treatments work with PCOS?
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            This AI assistant provides general information and is not a
            substitute for professional medical advice. Always consult with a
            healthcare provider for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}
