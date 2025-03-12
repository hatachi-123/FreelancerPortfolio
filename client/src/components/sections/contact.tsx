import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // ハニーポット対策 - スパムボットが入力した場合は成功を装って処理終了
    if (data.honeypot) {
      toast({
        title: "メッセージを送信しました",
        description: "お問い合わせありがとうございます。近日中にご連絡させていただきます。",
      });
      form.reset();
      setIsConfirming(false);
      return;
    }

    // 確認画面表示
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }

    // 送信処理
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("_captcha", "true");

      const response = await fetch("https://formsubmit.co/hatachi.keibu@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`送信エラー: ${response.status}`);
      }

      toast({
        title: "メッセージを送信しました",
        description: "お問い合わせありがとうございます。近日中にご連絡させていただきます。",
      });

      // フォームリセット
      form.reset();
      setIsConfirming(false);
    } catch (error) {
      console.error("送信エラー:", error);
      toast({
        variant: "destructive",
        title: "エラー",
        description: "メッセージの送信に失敗しました。時間をおいて再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
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
                {/* ハニーポットフィールド - スパムボット対策 */}
                <input
                  type="text"
                  id="_honey"
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ display: "none", position: "absolute", left: "-9999px" }}
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
                          disabled={isSubmitting}
                          aria-required="true"
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
                          disabled={isSubmitting}
                          aria-required="true"
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
                          disabled={isSubmitting}
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                        disabled={isSubmitting}
                      >
                        修正する
                      </Button>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            送信中...
                          </>
                        ) : "送信する"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
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