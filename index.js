import { simpleGit } from 'simple-git';

const gitRepository = simpleGit('.');

await gitRepository.pull();
await gitRepository.reset({ '--hard': null, 'HEAD': null });