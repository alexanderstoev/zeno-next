import { IconBoltFilled } from "@tabler/icons-react";

import { Card, CardBody, CardTitle } from "@/components/ui/card";

export default async function LandingPage() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between px-8 py-4">
        <h1 className="text-accent flex items-center gap-2 text-2xl font-bold">
          <IconBoltFilled />
          Zeno
        </h1>
      </header>

      <section className="flex flex-col items-center px-6 py-24 text-center">
        <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
          Organize your mind.
          <br />
          Simplify your workflow.
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          Zeno combines notes, tasks, and focus into one minimal and powerful workspace. Designed
          for clarity. Built for productivity.
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="/register" className="btn btn-accent">
            Get Started
          </a>
          <a href="/dashboard" className="btn btn-soft">
            Dashboard
          </a>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-6xl gap-8 px-8 py-16 md:grid-cols-3">
        {[
          {
            title: "Glimpses",
            desc: "Capture thoughts instantly with a clean and distraction-free editor.",
          },
          {
            title: "Tasks & Reminders",
            desc: "Track tasks, deadlines, and priorities — all in one view.",
          },
          {
            title: "Focus Mode",
            desc: "Stay on track with sessions designed to help you work with deep focus.",
          },
        ].map((item, i) => (
          <div key={i} className="card">
            <Card>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <p>{item.desc}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </section>

      <footer className="mt-auto py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zeno — All rights reserved.
      </footer>
    </div>
  );
}
