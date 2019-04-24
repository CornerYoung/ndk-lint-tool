#!/usr/bin/env node

const LintTool = require('../lib');

LintTool.lint(process.argv[2] !== '-n' ? true : undefined);
