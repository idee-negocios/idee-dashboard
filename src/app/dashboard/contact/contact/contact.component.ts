import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  columns: ITdDataTableColumn[] = [
      { name: 'food.name',  label: 'Dessert (100g serving)', sortable:true },
      { name: 'food.type', label: 'Type' },
      { name: 'calories', label: 'Calories', numeric: true, sortable:true },
      { name: 'fat', label: 'Fat (g)', numeric: true, sortable:true },
      { name: 'carbs', label: 'Carbs (g)', numeric: true},
      { name: 'protein', label: 'Protein (g)', numeric: true},
      { name: 'sodium', label: 'Sodium (mg)', numeric: true},
      { name: 'calcium', label: 'Calcium (%)', numeric: true},
      { name: 'iron', label: 'Iron (%)', numeric: true},
    ];

    basicData: any[] = [
        {
          'id': 1,
          'food': {
            'name': 'Frozen yogurt',
            'type': 'Ice cream',
          },
          'calories': 159.0,
          'fat': 6.0,
          'carbs': 24.0,
          'protein': 4.0,
          'sodium': 87.0,
          'calcium': 14.0,
          'iron': 1.0,
          'comments': 'I love froyo!',
        }, {
          'id': 2,
          'food': {
            'name': 'Ice cream sandwich',
            'type': 'Ice cream',
          },
          'calories': 237.0,
          'fat': 9.0,
          'carbs': 37.0,
          'protein': 4.3,
          'sodium': 129.0,
          'calcium': 8.0,
          'iron': 1.0,
        }, {
          'id': 3,
          'food': {
            'name': 'Eclair',
            'type': 'Pastry',
          },
          'calories':  262.0,
          'fat': 16.0,
          'carbs': 24.0,
          'protein':  6.0,
          'sodium': 337.0,
          'calcium':  6.0,
          'iron': 7.0,
        },
      ];
  }
