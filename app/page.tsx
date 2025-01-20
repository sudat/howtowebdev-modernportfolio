"use client";

import Image from "next/image";
import pp from "../public/pp.jpg";
import image1 from "../public/1.png";
import image2 from "../public/2.jpg";
import image3 from "../public/3.png";
import image4 from "../public/4.png";
import image5 from "../public/5.png";
import image6 from "../public/6.jpg";
import ThemeToggle from "../components/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="profile picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>
        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-ingigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Lewin japme
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                software architect
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                california, usa
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Solutions for Tommorow
              </h2>
              <p className="txt-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Expert in cloud architexture with{" "}
                <span className="text-black dark:text-white">
                  AWS
                </span>{" "}
                and{" "}
                <span className="text-black dark:text-white">
                  Azure
                </span>
                . specialize in designing and implementing
                largescale distributed systems. With deep
                expertise in{" "}
                <span className="text-black dark:text-white">
                  Python, Kubernetes, and micoservices
                  architecture.
                </span>
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Beyond tech, I'm a passionate traveler and
                foodie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105">
                Resume
              </Button>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors "
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors "
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors "
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400
              hover:text-black dark:hover:text-white transition-colors "
              >
                <FaYoutube className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2024 - Present
                  </p>
                  <p className="font-medium">
                    System Engineer
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    Company X
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native
                applications using AWS services,
                implementing serverless architectures that
                reduced operational costs by 40%.
                Established CI/CD pipelines and automated
                deployment processes, resulting in 60%
                faster release cycles.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2024 - Present
                  </p>
                  <p className="font-medium">
                    System Engineer
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    Company X
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native
                applications using AWS services,
                implementing serverless architectures that
                reduced operational costs by 40%.
                Established CI/CD pipelines and automated
                deployment processes, resulting in 60%
                faster release cycles.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2024 - Present
                  </p>
                  <p className="font-medium">
                    System Engineer
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    Company X
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Led the development of cloud-native
                applications using AWS services,
                implementing serverless architectures that
                reduced operational costs by 40%.
                Established CI/CD pipelines and automated
                deployment processes, resulting in 60%
                faster release cycles.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2024
                  </p>
                  <p className="font-medium">
                    Software Engineering
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    TCS
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Speacheaded the creation of a task
                automation tool, reducing manual effort and
                increasing productivity across teams by 30%.
                Worked closely with the development team to
                implement new features and improve the
                system's efficiency.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2024
                  </p>
                  <p className="font-medium">
                    Software Engineering
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    TCS
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Speacheaded the creation of a task
                automation tool, reducing manual effort and
                increasing productivity across teams by 30%.
                Worked closely with the development team to
                implement new features and improve the
                system's efficiency.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July,2022 - 2024
                  </p>
                  <p className="font-medium">
                    Software Engineering
                  </p>
                  <p className="txt-blue-600 dark:text-blue-400">
                    TCS
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Speacheaded the creation of a task
                automation tool, reducing manual effort and
                increasing productivity across teams by 30%.
                Worked closely with the development team to
                implement new features and improve the
                system's efficiency.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image1}
                    alt="project 1"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 1
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image2}
                    alt="project 2"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 2
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image3}
                    alt="project 3"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 3
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image4}
                    alt="project 4"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 4
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image5}
                    alt="project 5"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 5
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={image6}
                    alt="project 6"
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">
                        Project 6
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL, Drizzle
                      </p>
                    </div>
                    <Button
                      className=""
                      variant="ghost"
                      size="icon"
                    >
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500">
              © Lewin Japme 2025
            </p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
