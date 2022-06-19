import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Link,
  Menu,
  MenuItem,
  MenuList,
  useColorModeValue,
  Box,
  MenuButton,
  IconButton,
  Flex,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = href === path;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        color={active ? "#202023" : "undefined"}
        bg={active ? "grassTeal" : "undefined"}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container 
      display="flex"
      p={2}
      maxW="container.md"
      wrap="wrap"
      alignContent="center"
      justifyContent="space-between"
      >
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        mb={{base:0, md:2}}
      >
        <LinkItem href="/work" path={path}>
          Works
        </LinkItem>
        <LinkItem href="/contact" path={path}>
          Contact
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://github.com/futureituki/futureituki-homepage"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          Source
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://twitter.com/8tfGpQ99poWMQFN"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          Twitter
        </LinkItem>
      </Stack>
      <Box
      alignItems="center"
      mb={2}
      display={{ base: "flex", md: "none" }}>
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <NextLink href="/" passHref>
              <MenuItem as={Link}>About</MenuItem>
            </NextLink>
            <NextLink href="/work" passHref>
              <MenuItem as={Link}>Works</MenuItem>
            </NextLink>
            <NextLink href="/contact" passHref>
              <MenuItem as={Link}>Contact</MenuItem>
            </NextLink>
            <MenuItem as={Link} href="https://github.com/futureituki">
              Source
            </MenuItem>
            <MenuItem as={Link} href="https://twitter.com/8tfGpQ99poWMQFN">
              Twitter
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
