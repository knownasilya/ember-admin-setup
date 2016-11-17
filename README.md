# Ember Admin Theme Manager

Allows to load custom themes and override areas
defined by Ember Admin, which is a lazy loaded engine.

## Usage

Install

```sh
ember install ember-admin-theme-manager
```

And in your parent app add the following:

```hbs
{{#admin-theme-manager theme='bootstrap' adminConfig=adminConfig as |theme|}}
  {{#if (eq theme 'bootstrap')}}
    {{mount 'ember-admin-bootstrap'}}
  {{/if}}
{{/admin-theme-manager}}
```

Here `theme='bootstrap'` sets the active theme and mounts that once
Ember Admin has been laoded. This can be a dynamic value, so you
can use a select and change themes.

## Limitations

At the moment this doesn't support lazy loaded themes, because ember-engines don't
support lazy loaded routeless engines yet, but the setup makes it possible once
the support is there.
