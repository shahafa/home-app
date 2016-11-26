import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Filter extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row-reverse',
    }

    return (
      <div style={containerStyle}>
        <SelectField
          floatingLabelText='שכונה'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        <SelectField
          floatingLabelText='מחדרים'
          dir='rtl'
        >
          <MenuItem value={1} dir='rtl' primaryText='1' />
          <MenuItem value={2} dir='rtl' primaryText='2' />
          <MenuItem value={3} dir='rtl' primaryText='3' />
          <MenuItem value={4} dir='rtl' primaryText='4' />
        </SelectField>

        <SelectField
          floatingLabelText='עד חדרים'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        <SelectField
          floatingLabelText='מקומה'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        <SelectField
          floatingLabelText='עד קומה'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        <SelectField
          floatingLabelText='ממחיר'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        <SelectField
          floatingLabelText='עד מחיר'
          dir='rtl'
        >
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </SelectField>

        // חניה מעלית משופצת
      </div>
    );
  }
}

export default Filter;
