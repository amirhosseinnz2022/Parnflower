import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [services] = useState([
    {
      title: "Game Accounts",
      description: "Buy and sell verified game accounts for popular titles.",
      image: "/images/accounts.jpg",
    },
    {
      title: "In-Game Items",
      description: "Get exclusive skins, coins, and gear for top games.",
      image: "/images/items.jpg",
    },
    {
      title: "Gift Cards",
      description: "Purchase gift cards for PSN, Xbox, Steam, and more.",
      image: "/images/giftcards.jpg",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Parnflowers Limited</h1>
        <p className="text-gray-400 mt-2">
          Secure digital products for gamers worldwide
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="bg-gray-900 border-none">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-sm text-gray-300">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-gray-400 mb-4">
          For orders or inquiries, message us directly.
        </p>
        <div className="flex flex-col items-center gap-2">
          <a href="mailto:support@parnflowers.store" className="underline">
            support@parnflowers.store
          </a>
          <a href="http://t.me/Parnflowers" target="_blank">
            <Button>Message us on Telegram</Button>
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-10 text-sm">
        © 2025 Parnflowers Limited. All rights reserved.
      </footer>
    </div>
  );
}
