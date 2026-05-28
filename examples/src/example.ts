import dateUtil from '../../src';

console.log({
  nowY: dateUtil.nowY(),
  nowYm: dateUtil.nowYm(),
  nowYmd: dateUtil.nowYmd(),
  nowYmdh: dateUtil.nowYmdh(),
  nowYmdhm: dateUtil.nowYmdhm(),
  nowYmdhms: dateUtil.nowYmdhms(),
  getY: dateUtil.getY('2026-01-01 23:59:59'),
  getYm: dateUtil.getYm('2026-01-01 23:59:59'),
  getYmd: dateUtil.getYmd('2026-01-01 23:59:59'),
  getYmdh: dateUtil.getYmdh('2026-01-01 23:59:59'),
  getYmdhm: dateUtil.getYmdhm('2026-01-01 23:59:59'),
  getYmdhms: dateUtil.getYmdhms('2026-01-01 23:59:59'),
});
