CREATE OR REPLACE FUNCTION normalize_name(text) RETURNS text AS $$ BEGIN RETURN lower(regexp_replace($1, '[^\w\s]', '', 'g'));
END;
$$ LANGUAGE plpgsql;