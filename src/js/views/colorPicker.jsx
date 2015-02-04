(function(factory) {
  'use strict';

  define([
    'backbone',
    'react',
    'BRMixin',
    'collections/palette',
    'collections/picker',
    'jsx!views/palette',
    'jsx!views/picker'
  ], factory);

})(function(
  Backbone,
  React,
  BRMixin,
  CollectionPalette,
  CollectionPicker,
  Palette,
  Picker
) {
  'use strict';

  var HelloMessage = React.createClass({

    mixins: [BRMixin],

    render: function() {
      var props = this.props,
          pickedCollect = this.props.pickedCollect;
      return (
        <ul id='palette'>
          {props.collection.map(function(model) {
            return (
              <li className='palette-list'>
                <Palette model={model} isShow={true} pickedCollect={pickedCollect}/>
              </li>
            )
          })}
          <li className='picker'>
            <Picker />
          </li>
        </ul>
      );
    }
  });

  var collectionPalette = new CollectionPalette();
  var collectionPicker = new CollectionPicker();
  collectionPalette.fetch()

  React.render(<HelloMessage collection={collectionPalette} pickedCollect={collectionPicker}/>, document.getElementById('wrapper'));

})