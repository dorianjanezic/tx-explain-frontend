import { Flex, Box, Image, ActionIcon } from "@mantine/core";
import { IconBrandDiscord, IconBrandTwitter, IconBrandGithub, IconNotebook } from "@tabler/icons-react";
import InputForm from './InputForm';

interface HeaderProps {
  handleSubmit: (e: React.FormEvent, token: string) => Promise<void>;
  network: string;
  handleNetworkChange: (s: string) => void;
  txHash: string;
  handleTxHashChange: (s: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  handleSubmit,
  network,
  handleNetworkChange,
  txHash,
  handleTxHashChange
}) => {

  const iconData = [
    { icon: IconBrandDiscord, href: "https://discord.com/invite/ZhB9mpWWG3", target: "_blank" },
    { icon: IconBrandTwitter, href: "https://twitter.com/edennetwork", target: "_blank" },
    { icon: IconBrandGithub, href: "https://github.com/eden-network", target: "_blank" },
    // { icon: IconNotebook, href: "https://www.edennetwork.io/blog", target: "_blank" },
  ];

  return (
    <Flex px="2rem" py="1rem" align="center" justify="space-between">
      <Image
        alt="tx-agent"
        radius="md"
        h={50}
        w="auto"
        fit="contain"
        src="/txagent-logo.svg"
      />
      <Box mx="2rem" style={{ flexGrow: 1 }}>
        <InputForm
          handleSubmit={handleSubmit}
          network={network}
          handleNetworkChange={handleNetworkChange}
          txHash={txHash}
          handleTxHashChange={handleTxHashChange}
        />
      </Box>
      <Flex gap={20}>
        {iconData.map((icon, index) => (
          <ActionIcon
            key={index}
            component="a"
            href={icon.href}
            target={icon.target}
            size="lg"
            radius="xl"
            variant="transparent"
          >
            <icon.icon size={24} color="white" />
          </ActionIcon>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;