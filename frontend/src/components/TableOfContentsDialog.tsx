import { FC, useState } from 'react'

import { ArrowDropUp } from '@mui/icons-material'
import TocIcon from '@mui/icons-material/Toc'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useTranslation } from 'next-i18next'

import { TableOfContentItem } from '../lib/types'

export interface TableOfContentsDialogProps {
  header?: string
  items: ReadonlyArray<TableOfContentItem>
}

export const TableOfContentsDialog: FC<TableOfContentsDialogProps> = ({ header, items }) => {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleOnTriggerClick = () => {
    setOpen(true)
  }

  const handleOnDialogClose = () => {
    setOpen(false)
  }

  const handleOnCloseClick = () => {
    setOpen(false)
  }

  const handleListItemClick = () => {
    setOpen(false)
  }

  return (
    <>
      <Fab
        aria-label={t('table-of-contents.dialog.trigger-aria-label')}
        onClick={handleOnTriggerClick}
        className="focus-visible:ring-4 focus-visible:ring-primary-500"
      >
        <TocIcon />
      </Fab>
      <Dialog open={open} onClose={handleOnDialogClose} fullScreen={fullScreen}>
        <DialogTitle>{header ?? t('table-of-contents.header')}</DialogTitle>
        <Divider />
        <DialogContent className="p-0 pb-5">
          <nav aria-label={t('table-of-contents.aria-label')}>
            {items.length > 0 && (
              <List>
                {items.map(({ hash, text }) => (
                  <ListItem key={hash} disablePadding>
                    <ListItemButton component="a" href={`#${hash}`} onClick={handleListItemClick}>
                      <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider component="li" />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
                      history.pushState({}, document.title, ' ')
                      handleListItemClick()
                    }}
                  >
                    <ArrowDropUp color="primary" />
                    <ListItemText primary={t('table-of-contents.top')} primaryTypographyProps={{ variant: 'body1' }} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </nav>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleOnCloseClick}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
