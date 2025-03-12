import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export default function Contact() {
  const { toast } = useToast();
  const [isConfirming, setIsConfirming] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  const handleSubmit = async (data: InsertContact) => {
    if (!captchaToken) {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "reCAPTCHAを完了してください。",
      });
      return;
    }

    if (data.honeypot) {
      return;
    }

    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("g-recaptcha-response", captchaToken);
      formData.append("_captcha", "true");

      await fetch("https://formsubmit.co/hatachi.keibu@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "メッセージを送信しました",
        description: "お問い合わせありがとうございます。近日中にご連絡させていただきます。",
      });
      form.reset();
      setIsConfirming(false);
      setCaptchaToken(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "エラー",
        description: "メッセージの送信に失敗しました。時間をおいて再度お試しください。",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Contact
          </h2>

          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <input
                  type="text"
                  id="_honey"
                  style={{ display: "none" }}
                  {...form.register("honeypot")}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">お名前</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-green-900/20 border-green-800 text-white"
                          placeholder="山田 太郎"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">メールアドレス</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-green-900/20 border-green-800 text-white"
                          placeholder="your@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">メッセージ</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-green-900/20 border-green-800 text-white"
                          placeholder="お問い合わせ内容をご記入ください"
                          rows={6}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY || ''}
                    onChange={(token: string | null) => setCaptchaToken(token)}
                    hl="ja"
                  />
                </div>

                {isConfirming ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 rounded-lg">
                      <h3 className="text-white font-bold mb-2">確認画面</h3>
                      <p className="text-white">お名前: {form.getValues("name")}</p>
                      <p className="text-white">メール: {form.getValues("email")}</p>
                      <p className="text-white">メッセージ: {form.getValues("message")}</p>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsConfirming(false)}
                      >
                        修正する
                      </Button>
                      <Button type="submit" className="w-full">
                        送信する
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button type="submit" className="w-full">
                    確認画面へ
                  </Button>
                )}
              </form>
            </Form>
          </div>
        </motion.div>
      </div>

    </section>
  );
}