import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from 'lucide-react';
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: '', email: '', phone: '', message: '' });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-heading font-medium text-sm">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="rounded-lg h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-heading font-medium text-sm">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="rounded-lg h-11"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="font-heading font-medium text-sm">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+27..."
          className="rounded-lg h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-heading font-medium text-sm">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you'd like to order or ask a question..."
          rows={5}
          required
          className="rounded-lg resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="rounded-full px-8 font-heading font-medium h-11"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        Send Message
      </Button>
    </form>
  );
}