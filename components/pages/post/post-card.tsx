import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import { Post } from 'domain/models/post.model';

import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';
import AuthorLine from '../../base/author-line';
import ImageWithReference from '../../base/image-with-reference';

type Props = {
  frontmatter: Post;
  source: MDXRemoteSerializeResult;
};

const PostCard: React.FC<Props> = ({ source, frontmatter }) => {
  return (
    <Card>
      <ImageWithReference
        referenceURL={frontmatter.ogImage.thanksTo}
        href={frontmatter.ogImage.url}
        height={{ xs: '30vh', md: '60vh' }}
        width={'100%'}
        referencePosition={{ right: '1%', top: 0 }}
      />
      <CardContent sx={{ p: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant={'h2'}>{frontmatter.title}</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Chip label={frontmatter.tags[0]} color="primary" size="small" />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant={'subtitle2'}>
              {new Date(frontmatter.publishedAt).toLocaleDateString('pt-br')}{' '}
              &mdash; {frontmatter.readingTime}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AuthorLine name={frontmatter.author.name} />
          </Grid>
          <Grid item xs={12} textAlign="justify">
            <MDXRemote {...source} components={{ Image }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostCard;
