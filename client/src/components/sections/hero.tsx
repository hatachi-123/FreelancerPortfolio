import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';
// import { SiQiita, SiZenn, SiNote, SiWantedly } from 'react-icons/si';
import { SiQiita, SiZenn, SiWantedly } from 'react-icons/si';
import { TbNotebook } from 'react-icons/tb';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />

      <motion.div
        className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-start justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{
              marginLeft: window.innerWidth < 768 ? '5px' : '0px'
            }}>
            AI-Driven
            <br />
            Development
            <br />
            Solutions
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8"
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src="/myPortfolio.JPEG"
                alt="ポートフォリオ画像"
                className="w-40 h-48 md:w-55 md:h-64 object-cover rounded-full shadow-xl mx-auto md:ml-5"
                style={{
                  borderRadius: '40% / 30%',
                  marginTop: window.innerWidth < 768 ? '0px' : '50px'
                }}
              />
              <div className="text-white text-xl md:text-3xl text-center md:text-left mt-4 md:mt-0 md:ml-[70px]">
                <span className="md:hidden">
                  AIデ アナタノ仕事<br />タクサンタスケル。
                </span>
                <span className="hidden md:inline">
                  AIデ アナタノ仕事 タクサンタスケル。
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 w-full md:max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginLeft: window.innerWidth < 768 ? '0px' : '20px' }}
        >
          <div className="bg-base-100/80 backdrop-blur rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-base-300">
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaGithub className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">GitHub | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaTwitter className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Twitter/X | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <SiQiita className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Qiita | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <SiZenn className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Zenn | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <TbNotebook className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">note | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaYoutube className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">YouTube | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaLinkedin className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">LinkedIn | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaDiscord className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Discord | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <SiWantedly className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Wantedly | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaInstagram className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">Instagram | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
              <li className="px-2 md:px-4 py-2 md:py-3 flex items-center text-white hover:text-green-400 transition-colors">
                <FaTiktok className="text-2xl md:text-4xl mr-2 md:mr-3 text-white" />
                <span className="text-sm md:text-base">TikTok | 準備中</span>
                <span className="ml-auto text-base md:text-lg">›</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#about"
          className="text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}