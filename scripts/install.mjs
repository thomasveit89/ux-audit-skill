#!/usr/bin/env node
/**
 * Installs the ux-audit skill into your Claude Code skills directory by
 * symlinking this repo in place, so future `git pull`s are picked up
 * automatically without rerunning this script.
 * Run from the repo root: node scripts/install.mjs
 */

import { cpSync, existsSync, lstatSync, rmSync, symlinkSync } from 'fs';
import { join, dirname } from 'path';
import { homedir } from 'os';
import { fileURLToPath } from 'url';

const SKILL_DIR = join(homedir(), '.claude', 'skills', 'ux-audit');
const REPO_DIR = dirname(dirname(fileURLToPath(import.meta.url)));

console.log('🔍 Installing ux-audit skill...\n');

if (pathExists(SKILL_DIR)) {
  rmSync(SKILL_DIR, { recursive: true, force: true });
}

try {
  symlinkSync(REPO_DIR, SKILL_DIR, 'dir');
  console.log(`✓ Linked ${SKILL_DIR} -> ${REPO_DIR}`);
} catch (err) {
  console.log(`  Symlink failed (${err.code ?? err.message}), copying files instead`);
  cpSync(REPO_DIR, SKILL_DIR, { recursive: true });
  console.log(`✓ Copied repo to ${SKILL_DIR}`);
  console.log('  Note: future changes won\'t show up until you rerun this script.');
}

function pathExists(path) {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
}

const installed = existsSync(join(SKILL_DIR, 'SKILL.md')) && existsSync(join(SKILL_DIR, 'principles.json'));
if (installed) {
  console.log(`\n✅ Done! Run /ux-audit <url> in Claude Code to get started.\n`);
} else {
  console.error('\n❌ Something went wrong. Check the paths above.');
  process.exit(1);
}
