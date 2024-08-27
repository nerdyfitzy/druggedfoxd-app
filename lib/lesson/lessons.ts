import { supabase } from '../supabase';

export const getLessons = async () => {
  let query = supabase
    .from('Lessons')
    .select('*', { count: 'exact' })
    .order('date', { ascending: false });

  const { data, count, error } = await query;

  console.log('Got', count, 'results for filters');
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
