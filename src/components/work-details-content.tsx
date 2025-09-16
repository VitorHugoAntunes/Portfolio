'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Work } from '@/types/works';
import { getNestedTranslation } from '@/utils/getTranslation';
import { Calendar, Code2, ExternalLink, Eye, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from './translation-provider';

interface WorkDetailsContentProps {
  work: Work;
}

export function WorkDetailsContent({ work }: WorkDetailsContentProps) {
  const { translations } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">{work.title}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-medium">
                {work.category}
              </Badge>
              <Badge
                variant={work.status === getNestedTranslation(translations, 'worksSection.projects.docsite.status', 'Ativo') ? 'default' : 'secondary'}
                className="font-medium"
              >
                {work.status}
              </Badge>
            </div>
          </div>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          {work.longDescription}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
        <Image
          src={work.image}
          alt={work.title}
          width={800}
          height={400}
          className="w-full h-48 sm:h-56 object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border">
          <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-muted-foreground block">
              {getNestedTranslation(translations, 'worksSection.date', 'Data')}
            </span>
            <span className="text-sm font-semibold">{work.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border">
          <Code2 className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-muted-foreground block">
              {getNestedTranslation(translations, 'worksSection.status', 'Status')}
            </span>
            <span className="text-sm font-semibold">{work.status}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          {getNestedTranslation(translations, 'worksSection.technologies', 'Tecnologias Utilizadas')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {work.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-3 py-1 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-primary" />
          {getNestedTranslation(translations, 'worksSection.features', 'Principais Funcionalidades')}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {work.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-foreground leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Github className="w-5 h-5 text-primary" />
          {getNestedTranslation(translations, 'worksSection.challenges', 'Desafios e Soluções')}
        </h4>
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {work.challenges}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button asChild className="flex-1 h-11">
          <Link href={work.slug} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {getNestedTranslation(translations, 'worksSection.viewProject', 'Ver Projeto')}
          </Link>
        </Button>
        {work.github && (
          <Button variant="outline" asChild className="flex-1 h-11">
            <Link href={work.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              {getNestedTranslation(translations, 'worksSection.github', 'GitHub')}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}