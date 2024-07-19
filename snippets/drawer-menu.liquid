<script src="{{'drawer-menu-type.js' | asset_url}}" defer></script>

{% liquid
  assign menus = blocks | where: 'type', 'menu'
  assign sub_menus = blocks | where: 'type', 'sub_menu'
  assign three_menus = blocks | where: 'type', 'three_menu'
  assign comparisons = blocks | where: 'type', 'comparison'
  assign link_items = blocks | where: 'type', 'link-item'
%}
<drawer-menu-type>
  <div class="drawer-menu-container">
    <div class="drawer-menu-content">
      {% for menu in menus %}
        <div class="drawer-menu-item {%if menu.settings.isShowArrow == true%}drawer-menu-item-ele{%endif%}">
          <div
            class="drawer-menu-item-link"
          >
            <a
              href="{{menu.settings.menu_link}}"
              {% if menu.settings.menu_link != blank %}
                href="{{menu.settings.menu_link}}"
              {% else %}
                onclick="return false"
              {% endif %}
            >
              {{- menu.settings.text -}}
            </a>
            {% if menu.settings.isShowArrow %}
              <span class="drawer-menu-arrow-ward">
                {% render 'icon', icon: 'plus', class: 'drawer-menu-arrow arrow-plus' %}
                {% render 'icon', icon: 'minus', class: 'drawer-menu-arrow arrow-minus' %}
              </span>
            {% endif %}
          </div>
          {% if menu.settings.isShowArrow %}
            {% case menu.settings.menu_type %}
              {% when 'type1' %}
                {% render 'drawer-menu-type1',
                  comparisons: comparisons,
                  three_menus: three_menus,
                  sub_menus: sub_menus,
                  index: forloop.index
                %}
              {% when 'type2' %}
                {% render 'drawer-menu-type2', sub_menus: sub_menus, index: forloop.index %}
              {% when 'type3' %}
                {% render 'drawer-menu-type2', sub_menus: sub_menus, index: forloop.index %}
              {% when 'type4' %}
                {% render 'drawer-menu-type4', link_items: link_items, sub_menus: sub_menus, index: forloop.index %}
              {% else %}

            {% endcase %}
          {% endif %}
        </div>
      {% endfor %}
    </div>
    <div class="drawer-menu-footer">
      <a href="{{ routes.account_url }}" class="drawer-menu-account">
        {%- render 'icon' with 'account' -%}
        <span>Sign Up</span>
      </a>
    </div>
  </div>
</drawer-menu-type>
