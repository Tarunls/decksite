'use client';

import { cloneElement, useRef, type ReactElement, type ReactNode } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { Dialog, DialogTitle } from './ui/dialog';

// Keep each panel's existing visual container while sharing modal keyboard behavior.
export function AccessibleDialog({ children, label, onClose, modal = true }: {
  children: ReactElement<{ children?: ReactNode }>;
  label: string;
  onClose: () => void;
  modal?: boolean;
}) {
  const returnFocus = useRef<HTMLElement | null>(null);

  return (
    <Dialog open modal={modal} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Content
        asChild
        aria-describedby={undefined}
        onOpenAutoFocus={() => {
          returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          if (returnFocus.current?.isConnected) returnFocus.current.focus({ preventScroll: true });
        }}
      >
        {cloneElement(children, undefined,
          <DialogTitle className="sr-only">{label}</DialogTitle>,
          children.props.children,
        )}
      </Content>
    </Dialog>
  );
}
