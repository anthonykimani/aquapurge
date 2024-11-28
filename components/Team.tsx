"use client";

import { buttonVariants } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGmqkgdiO8FzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723330057093?e=1732752000&v=beta&t=eJ_WN9lzmwOBCrPRYoA4tT2d-FTu67yGXw3ld1dGDmM",
    name: "Ibrahim Aziz",
    position: "Executive Director",
    description: "Blockchain Developer",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQFzlpGtaAwSCA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718622406085?e=1732752000&v=beta&t=aXtIFvMEiW0kOZW5J-TvUNtfrq55mP0b4l2kPtum-Lc",
    name: "Jonathan Else",
    position: "Technical Director",
    description: "Depin and Onchain Analyst",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQEf0MqmmOjCPQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721054537854?e=1732752000&v=beta&t=Gr8-3V0zrqZq_-AzcrbERg5Tn0VUyVzlavilbPxCIp0",
    name: "Amina Ali",
    position: "PR Lead",
    description: "Zero Knowledge Researcher",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGmqkgdiO8FzQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723330057093?e=1732752000&v=beta&t=eJ_WN9lzmwOBCrPRYoA4tT2d-FTu67yGXw3ld1dGDmM",
    name: "Omar Khalid",
    position: "Product Manager",
    description: "Blockchain Developer",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export default function Team() {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="flex flex-col items-center font-DM py-[50px]">
      <h3 className="text-aqua font-semibold text-xl">OUR TEAM</h3>
      <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-5">
        We are looking to expand on our diverse and skillful team and create
        larger community
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <Image
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  width={0}
                  height={0}
                  className="rounded-full w-48 h-48 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
