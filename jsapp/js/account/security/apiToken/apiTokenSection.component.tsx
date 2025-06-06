import React, { useState, useEffect } from 'react'

import cx from 'classnames'
import securityStyles from '#/account/security/securityRoute.module.scss'
import Button from '#/components/common/button'
import TextBox from '#/components/common/textBox'
import { dataInterface } from '#/dataInterface'
import { notify } from '#/utils'
import styles from './apiTokenSection.module.scss'

const HIDDEN_TOKEN_VALUE = '*'.repeat(40)

/**
 * Displays secret API token of a logged in user.
 * The token is obfuscated until a "show me" button is clicked.
 */
export default function ApiTokenDisplay() {
  const [token, setToken] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleTokenVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (isVisible && token === null) {
      const fetchToken = async () => {
        setIsFetching(true)
        try {
          const result = await dataInterface.apiToken()
          setToken(result.token)
        } catch {
          notify.error(t('Failed to get API token'))
        } finally {
          setIsFetching(false)
        }
      }

      fetchToken()
    }
  }, [isVisible])

  return (
    <section className={securityStyles.securitySection}>
      <div className={securityStyles.securitySectionTitle}>
        <h2 className={securityStyles.securitySectionTitleText}>{t('API Key')}</h2>
      </div>

      <div className={cx(securityStyles.securitySectionBody, styles.body)}>
        <TextBox
          type={isVisible && !isFetching && token !== null ? 'text' : 'password'}
          value={token !== null ? token : HIDDEN_TOKEN_VALUE}
          readOnly
          className={styles.token}
        />
      </div>

      <div className={styles.options}>
        <Button label='Display' size='m' type='primary' onClick={toggleTokenVisibility} />
      </div>
    </section>
  )
}
