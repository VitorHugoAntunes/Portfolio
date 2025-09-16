'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import type { Work } from '@/types/works';
import { WorkDetailsContent } from './work-details-content';

interface WorkDetailsModalProps {
  work: Work | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkDetailsModal({ work, open, onOpenChange }: WorkDetailsModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!work) return null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[90vh] overflow-y-auto w-full">
          <DialogHeader>
            <DialogTitle className="sr-only">{work.title}</DialogTitle>
          </DialogHeader>
          <WorkDetailsContent work={work} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[96vh]">
        <DrawerHeader>
          <DrawerTitle className="sr-only">{work.title}</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto p-6">
          <WorkDetailsContent work={work} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}