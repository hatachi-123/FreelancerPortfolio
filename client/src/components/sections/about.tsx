import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Habuchi Keita
              </h3>
              <p className="text-white/80 leading-relaxed">
                With 10 years of experience in financial system maintenance and
                development, I've transitioned into freelance work focusing on
                AI-powered application development. My expertise spans from
                traditional system architecture to cutting-edge AI integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-green-900/20 border-green-800">
                <CardContent className="p-6">
                  <Brain className="h-8 w-8 text-green-400 mb-4" />
                  <h4 className="text-white font-semibold mb-2">AI Integration</h4>
                  <p className="text-white/60 text-sm">
                    Specialized in implementing AI solutions in business applications
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-900/20 border-green-800">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-green-400 mb-4" />
                  <h4 className="text-white font-semibold mb-2">Development</h4>
                  <p className="text-white/60 text-sm">
                    Full-stack development with modern technologies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-900/20 border-green-800">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-green-400 mb-4" />
                  <h4 className="text-white font-semibold mb-2">Systems</h4>
                  <p className="text-white/60 text-sm">
                    Financial system architecture and maintenance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
