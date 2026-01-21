import { VStack, Box, Icon, Text, Divider } from '@chakra-ui/react';
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineAppstore,
  AiOutlinePlaySquare,
  AiOutlinePicture,
  AiOutlineVideoCamera,
  AiOutlineMore,
  AiOutlineFolder,
  AiOutlineStar,
  AiOutlineLogin,
} from 'react-icons/ai';
import { HiSparkles } from 'react-icons/hi';
import toast from 'react-hot-toast';

interface SidebarItem {
  icon: any;
  label: string;
  isActive?: boolean;
  isDevelopment?: boolean;
}

interface SidebarProps {
  onLogout?: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const menuItems: SidebarItem[] = [
    { icon: AiOutlineHome, label: 'Home', isActive: true },
    { icon: AiOutlineFileText, label: 'Document', isDevelopment: true },
    { icon: AiOutlineAppstore, label: 'Design', isDevelopment: true },
    { icon: AiOutlinePlaySquare, label: 'Presentation', isDevelopment: true },
    { icon: AiOutlinePicture, label: 'Image', isDevelopment: true },
    { icon: AiOutlineVideoCamera, label: 'Video', isDevelopment: true },
    { icon: AiOutlineMore, label: 'More', isDevelopment: true },
  ];

  const bottomItems: SidebarItem[] = [
    { icon: AiOutlineFolder, label: 'Templates', isDevelopment: true },
    { icon: AiOutlineStar, label: 'Brand', isDevelopment: true },
    { icon: AiOutlineFolder, label: 'Projects', isDevelopment: true },
  ];

  const handleItemClick = (item: SidebarItem) => {
    if (item.isDevelopment) {
      toast('🚧 Feature under development', {
        icon: '⚙️',
      });
    }
  };

  return (
    <Box
      w="80px"
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      display="flex"
      flexDirection="column"
      py={4}
    >
      <VStack
        gap={4}
        flex={1}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#CBD5E0',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#A0AEC0',
          },
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={index}
            w="60px"
            h="60px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            borderRadius="md"
            bg={item.isActive ? 'blue.50' : 'transparent'}
            color={item.isActive ? 'blue.500' : 'gray.600'}
            _hover={{
              bg: 'gray.100',
              color: 'blue.500',
            }}
            transition="all 0.2s"
            onClick={() => handleItemClick(item)}
          >
            <Icon fontSize="24px">
              <item.icon />
            </Icon>
            <Text fontSize="10px" mt={1}>
              {item.label}
            </Text>
          </Box>
        ))}
      </VStack>

      <VStack gap={4} mt="auto">
        <Divider />
        
        {bottomItems.map((item, index) => (
          <Box
            key={index}
            w="60px"
            h="60px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            borderRadius="md"
            color="gray.600"
            _hover={{
              bg: 'gray.100',
              color: 'blue.500',
            }}
            transition="all 0.2s"
            onClick={() => handleItemClick(item)}
          >
            <Icon fontSize="24px">
              <item.icon />
            </Icon>
            <Text fontSize="10px" mt={1}>
              {item.label}
            </Text>
          </Box>
        ))}

        <Divider />

        <Box
          w="60px"
          h="60px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          borderRadius="md"
          color="gray.600"
          _hover={{
            bg: 'gray.100',
            color: 'red.500',
          }}
          transition="all 0.2s"
          onClick={onLogout}
        >
          <Icon fontSize="24px">
            <AiOutlineLogin />
          </Icon>
          <Text fontSize="10px" mt={1}>
            Sign Out
          </Text>
        </Box>

        <Box
          w="60px"
          h="60px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          borderRadius="md"
          color="purple.600"
          bg="purple.50"
          _hover={{
            bg: 'purple.100',
            color: 'purple.700',
          }}
          transition="all 0.2s"
          onClick={() => toast('🚀 Upgrade feature coming soon!')}
        >
          <Icon fontSize="24px">
            <HiSparkles />
          </Icon>
          <Text fontSize="10px" mt={1}>
            Upgrade
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
