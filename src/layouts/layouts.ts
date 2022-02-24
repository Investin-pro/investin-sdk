import { struct, u8, u16, seq, ns64 } from 'buffer-layout';
import { publicKeyLayout, u64, U64F64 } from './common';

export const NUM_TOKENS = 8
export const MAX_TOKENS = 50
export const NUM_MARGIN = 2
export const MAX_INVESTORS = 10

export const PLATFORM_DATA = struct([
  u8('is_initialized'),
  u8('version'),
  u8('router_nonce'),
  u8('no_of_active_funds'),
  u8('token_count'),
  // seq(u8(), 3, 'padding'),

  u8('padding'),
  u16('total_v3_funds'),

  publicKeyLayout('router'),
  publicKeyLayout('investin_admin'),
  publicKeyLayout('investin_vault'),

  seq(
    struct([
      publicKeyLayout('mint'),
      u64('decimals'),
      publicKeyLayout('pool_coin_account'),
      publicKeyLayout('pool_pc_account'),
      U64F64('pool_price'),
      ns64('last_updated'),
      u64('padding')
    ]),
    MAX_TOKENS, 'token_list'
  ),

])

export const FUND_DATA_OLD = struct([
  u8('is_initialized'),
  u8('number_of_active_investments'),
  u8('no_of_investments'),
  u8('signer_nonce'),
  u8('no_of_margin_positions'),
  u8('no_of_assets'),
  u16('position_count'),

  u8('version'),
  u8('is_private'),
  seq(u8(), 6, 'padding'),

  u64('min_amount'),
  U64F64('min_return'),
  U64F64('performance_fee_percentage'),
  U64F64('total_amount'),
  U64F64('prev_performance'),

  u64('amount_in_router'),
  U64F64('performance_fee'),
  publicKeyLayout('manager_account'),
  publicKeyLayout('fund_pda'),
  seq(
    struct([
      u8('is_active'),
      seq(u8(),3,'index'),
      u8('mux'),
      u8('is_on_mango'),
      seq(u8(), 2, 'padding'),
      u64('balance'),
      u64('debt'),
      publicKeyLayout('vault')
    ]),
    NUM_TOKENS, 'tokens'
  ),
  seq(publicKeyLayout(), MAX_INVESTORS, 'investors'),
  
  struct([
      publicKeyLayout('mango_account'),
      seq(u8(),3,'perp_markets'),
      u8('padding'),
      u8('deposit_index'),
      u8('markets_active'),
      u8('deposits_active'),
      u8('xpadding'),
      seq(u64(), 2, 'investor_debts'),
      seq(u8('padding'), 24),
    ],'mango_positions'),

  // mangoInfoLayout('mango_positions'),
  
     
  seq(u8(), 80, 'margin_update_padding'),
  seq(u8(), 32, 'padding'),

])

export const FUND_DATA = struct([
  u8('is_initialized'),
  u8('number_of_active_investments'),
  u8('no_of_investments'),
  u8('signer_nonce'),
  u8('no_of_margin_positions'),
  u8('no_of_assets'),
  u16('position_count'),

  u8('version'),
  u8('is_private'),
  u16('fund_v3_index'),
  seq(u8(), 4, 'padding'),

  u64('min_amount'),
  U64F64('min_return'),
  U64F64('performance_fee_percentage'),
  U64F64('total_amount'),
  U64F64('prev_performance'),

  u64('amount_in_router'),
  U64F64('performance_fee'),
  publicKeyLayout('manager_account'),
  publicKeyLayout('fund_pda'),
  seq(
    struct([
      u8('is_active'),
      seq(u8(),3,'index'),
      u8('mux'),
      u8('is_on_mango'),
      seq(u8(), 2, 'padding'),
      u64('balance'),
      u64('debt'),
      publicKeyLayout('vault')
    ]),
    NUM_TOKENS, 'tokens'
  ),
  seq(publicKeyLayout(), MAX_INVESTORS, 'investors'),
  
  struct([
      publicKeyLayout('mango_account'),
      seq(u8(),3,'perp_markets'),
      u8('padding'),
      u8('deposit_index'),
      u8('markets_active'),
      u8('deposits_active'),
      u8('xpadding'),
      seq(u64(), 2, 'investor_debts'),
      seq(u8('padding'), 24),
    ],'mango_positions'),

  
  struct([
      u8('is_active'),
      u8('is_split'),
      u8('hop'),
      u8('count'),
      u8('token_in_slot'),
      u8('token_out_slot'),
      seq(u8('padding'), 2),
   
      publicKeyLayout('token_in'),
      publicKeyLayout('token_out'),
      u64('amount_in'),
      u64('min_amount_out'),
  ],'guard'),
  
  seq(u8(), 24, 'margin_update_padding'),
  seq(u8(), 2024, 'migration_additonal_padding'),
])

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
]);