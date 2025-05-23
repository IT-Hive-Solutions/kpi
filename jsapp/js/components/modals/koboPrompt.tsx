import React from 'react'

import type { ButtonType } from '#/components/common/button'
import Button from '#/components/common/button'
import type { IconName } from '#/k-icons'
import KoboModal from './koboModal'
import KoboModalContent from './koboModalContent'
import KoboModalFooter from './koboModalFooter'
import KoboModalHeader from './koboModalHeader'

interface KoboPromptButton {
  type?: ButtonType
  label: string
  onClick: () => void
  isDisabled?: boolean
  isPending?: boolean
}

const defaultButtonType = 'primary'

interface KoboPromptProps {
  /** For displaying the prompt. */
  isOpen: boolean
  /**
   * Request from the inside for the prompt parent to close it. Note that prompt
   * doesn't have "x" close button, so make sure there is a way to close it :)
   */
  onRequestClose: () => void
  /**
   * Whether it should close when user hits Esc or clicks on overlay.
   * NOTE: disabling Esc key may introduce an accessibility issue.
   */
  isDismissableByDefaultMeans?: boolean
  title: string
  /** Optional icon displayed on the left of the title. */
  titleIcon?: IconName
  /** Color of the optional icon. */
  titleIconColor?: 'blue' | 'mid-red'
  /** The content of the propmt; pass a string or a more complex JSX. */
  children?: React.ReactNode
  /** A list of buttons to be displayed on the bottom right of the prompt. */
  buttons: KoboPromptButton[]
  'data-cy'?: string
}

/**
 * @deprecated Since `KoboModal` is deprecated, this one is too. Please use `import { Modal } from '@mantine/core'` instead.
 */
export default function KoboPrompt(props: KoboPromptProps) {
  return (
    <KoboModal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      isDismissableByDefaultMeans={props.isDismissableByDefaultMeans}
      data-cy={props['data-cy']}
    >
      <KoboModalHeader icon={props.titleIcon} iconColor={props.titleIconColor}>
        {props.title}
      </KoboModalHeader>

      <KoboModalContent>{props.children}</KoboModalContent>

      <KoboModalFooter>
        {props.buttons.map((promptButton, index) => (
          <Button
            key={index}
            type={promptButton.type || defaultButtonType}
            size='m'
            label={promptButton.label}
            onClick={promptButton.onClick}
            isDisabled={promptButton.isDisabled}
            isPending={promptButton.isPending}
          />
        ))}
      </KoboModalFooter>
    </KoboModal>
  )
}
