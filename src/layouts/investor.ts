import { seq, struct, u8 } from 'buffer-layout';
import { NUM_MARGIN, NUM_TOKENS, publicKeyLayout, u64, U64F64 } from './common';

export const INVESTOR_DATA = struct([
  u8('is_initialized'),
  u8('has_withdrawn'),
  u8('withdrawn_from_margin'),
  seq(u8('padding'), 5),

  publicKeyLayout('owner'),
  u64('amount'),
  U64F64('start_performance'),
  u64('amount_in_router'),
  publicKeyLayout('manager'),
  seq(U64F64(), NUM_MARGIN, 'margin_debt'),
  seq(u64(), NUM_MARGIN, 'margin_position_id'),

  seq(u8(), NUM_TOKENS, 'token_indexes'),
  seq(u64(), NUM_TOKENS, 'token_debts'),

  seq(u8(), 32, 'xpadding')
])