import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";
import Arrow from "../ui/0-Arrow";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <p>クレジットカードのシステム開発に10年間従事</p>
                <p>決済機能のシステムの開発を担当</p>
                <p>３０名超のチームの現場推進リーダとして活躍</p>
                <p>現在は個人で生成AIを活用した爆速開発に全量投球</p>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-green-900/20 border-green-800 h-full flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="flex flex-col h-full">
                    <Brain className="h-8 w-8 text-green-400 mb-4 flex-shrink-0" />
                    <h4 className="text-white font-semibold mb-2 flex-shrink-0">個人開発<br />～ Personal Development ～</h4>
                    <p className="text-white/60 text-sm">
                      日常のちょっとしたことを解決するようなアプリを鋭意開発中
                      <br />
                      その他、ビジネスアプリケーションの開発も行っています
                      <br />
                      2週間に1本のペースで開発中
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-800 h-full flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="flex flex-col h-full">
                    <Code className="h-8 w-8 text-green-400 mb-4 flex-shrink-0" />
                    <h4 className="text-white font-semibold mb-2 flex-shrink-0">受注開発<br />～ Order Development ～</h4>
                    <p className="text-white/60 text-sm">
                      ご依頼者様の要望に合わせたアプリケーションの開発を行います
                      <br />
                      個人開発者ならではの短期間、安価な開発が可能です
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
      <Arrow href="#work" />
    </section>
  );
}