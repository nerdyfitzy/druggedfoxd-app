import { supabase } from '../supabase';
import { Filters } from '~/constants/types';

export const getLessons = async ({ character, opponent, notes, timestamped }: Filters) => {
  let query = supabase.from('Lessons').select('*', { count: 'exact' });
  if (character) {
    query = query.eq('character', character);
  }
  if (opponent) {
    query = query.eq('opponent', opponent);
  }
  if (notes) {
    query = query.eq('notes', notes);
  }
  if (timestamped) {
    query = query.eq('timestamped', true);
  }
  const { data, count, error } = await query;

  console.log('Got', count, 'results for filters', character, opponent, notes, timestamped);
  if (!error) {
    return {
      data,
      count,
    };
  } else {
    console.log(error);
    return { data: [], count: 0 };
  }
};
