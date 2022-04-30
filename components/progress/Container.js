import { Box } from '@chakra-ui/react'

export const Container = ({ animationDuration, children, isFinished }) => (
  <Box position="fixed" left="0" top="0" pointerEvents="none" w="100%" h="3px" bg="linear-gradient(to right, #357DF8, #7F3BF2);"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </Box>
)