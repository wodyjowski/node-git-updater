import { simpleGit } from 'simple-git';

const gitRepository = simpleGit('.');

await gitRepository.pull();