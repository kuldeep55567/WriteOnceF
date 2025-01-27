'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Code, Link, Image, ListOrdered, Quote, Heading } from 'lucide-react';

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface Tag {
  id: string;
  name: string;
}

export default function Editor() {
  const [title, setTitle] = useState('');
  const [published, setPublished] = useState(false);
  const [content, setContent] = useState('');
  const [series, setSeries] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag && tags.length < 4) {
      setTags([...tags, { id: Date.now().toString(), name: newTag }]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagId: string) => {
    setTags(tags.filter(tag => tag.id !== tagId));
  };

  const handlePublish = () => {
    const article = {
      article: {
        title,
        published,
        body_markdown: content,
        tags: tags.map(tag => tag.name),
        series
      }
    };
    console.log(JSON.stringify(article, null, 2));
    // Here you'll integrate with your API
  };

  const toolbarCommands = [
    { icon: <Heading size={16} />, command: '# ', tooltip: 'Add heading' },
    { icon: <Code size={16} />, command: '```\n\n```', tooltip: 'Add code block' },
    { icon: <Link size={16} />, command: '[](url)', tooltip: 'Add link' },
    { icon: <Image size={16} />, command: '![alt text](url)', tooltip: 'Add image' },
    { icon: <ListOrdered size={16} />, command: '1. ', tooltip: 'Add numbered list' },
    { icon: <Quote size={16} />, command: '> ', tooltip: 'Add quote' },
  ];

  const insertCommand = (command: string) => {
    const textarea = document.querySelector('.w-md-editor-text-input') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end);

      const newText = before + command + after;
      setContent(newText);

      // Set cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + command.length, start + command.length);
      }, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <Card className="max-w-5xl mx-auto p-6">
        <div className="space-y-6">
          {/* Title and Publish Toggle */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <Input
              placeholder="Article title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 text-xl font-semibold"
            />
            <div className="flex items-center gap-2">
              <Switch
                checked={published}
                onCheckedChange={setPublished}
                id="published"
              />
              <Label htmlFor="published">Published</Label>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags (max 4)</Label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="px-3 py-1">
                  {tag.name}
                  <button
                    onClick={() => handleRemoveTag(tag.id)}
                    className="ml-2 hover:text-red-500"
                  >
                    <X size={14} />
                  </button>
                </Badge>
              ))}
              {tags.length < 4 && (
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    className="w-32"
                  />
                  <Button size="sm" onClick={handleAddTag}>
                    <Plus size={16} />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Series */}
          <div className="space-y-2">
            <Label>Series (optional)</Label>
            <Input
              placeholder="Series name..."
              value={series}
              onChange={(e) => setSeries(e.target.value)}
            />
          </div>

          <Separator />

          {/* Custom Toolbar */}
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-4">
              {toolbarCommands.map((cmd, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => insertCommand(cmd.command)}
                  title={cmd.tooltip}
                >
                  {cmd.icon}
                </Button>
              ))}
            </div>
          </ScrollArea>

          {/* Markdown Editor */}
          <div data-color-mode="light">
            <MDEditor
              value={content}
              onChange={(val) => setContent(val || '')}
              preview="edit"
              height={500}
              className="border rounded-lg"
            />
          </div>

          {/* Publish Button */}
          <div className="flex justify-end">
            <Button
              size="lg"
              onClick={handlePublish}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {published ? 'Publish' : 'Save Draft'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}