import { TranslateResult } from 'vue-i18n';

type Translation = {
	locale: string;
	translation: string;
};

export type Width = 'half' | 'half-left' | 'half-right' | 'full' | 'fill';

export type Type =
	| 'alias'
	| 'integer'
	| 'bigInteger'
	| 'text'
	| 'string'
	| 'float'
	| 'decimal'
	| 'boolean'
	| 'date'
	| 'datetime'
	| 'time'
	| 'timestamp'
	| 'enum'
	| 'json'
	| 'uuid'
	| 'binary'
	| 'unknown';

export const types: Type[] = [
	'alias',
	'bigInteger',
	'boolean',
	'date',
	'datetime',
	'decimal',
	'float',
	'integer',
	'json',
	'string',
	'text',
	'time',
	'timestamp',
	'binary',
	'unknown',
];

export type DatabaseColumn = {
	/** @todo import this from knex-schema-inspector when that's launched */
	name: string;
	table: string;
	type: string;
	default_value: any | null;
	max_length: number | null;
	is_nullable: boolean;
	is_primary_key: boolean;
	has_auto_increment: boolean;
	foreign_key_column: string | null;
	foreign_key_table: string | null;
	comment: string | null;

	// Postgres Only
	schema?: string;
	foreign_key_schema?: string | null;
};

export type SystemField = {
	id: number;
	collection: string;
	field: string;
	group: number | null;
	hidden: boolean;
	locked: boolean;
	interface: string | null;
	display: string | null;
	options: null | Record<string, any>;
	display_options: null | Record<string, any>;
	readonly: boolean;
	required: boolean;
	sort: number | null;
	special: string | null;
	translation: null | Translation[];
	width: Width | null;
};

export interface FieldRaw {
	collection: string;
	field: string;

	database: DatabaseColumn | null;
	system: SystemField | null;
}

export interface Field extends FieldRaw {
	name: string | TranslateResult;
	type: Type;
	system: SystemField;
}
