import React from "react";

export default function SizeGuide() {
  return (
    <div className="modal fade modal-size-guide" id="size-guide">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content widget-tabs style-2">
          <table className="tab-sizeguide-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>US</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Low Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>2</td>
                <td>32</td>
                <td>24 - 25</td>
                <td>33 - 34</td>
              </tr>
              <tr>
                <td>S</td>
                <td>4</td>
                <td>26 - 27</td>
                <td>34 - 35</td>
                <td>35 - 26</td>
              </tr>
              <tr>
                <td>M</td>
                <td>6</td>
                <td>28 - 29</td>
                <td>36 - 37</td>
                <td>38 - 40</td>
              </tr>
              <tr>
                <td>L</td>
                <td>8</td>
                <td>30 - 31</td>
                <td>38 - 29</td>
                <td>42 - 44</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>10</td>
                <td>32 - 33</td>
                <td>40 - 41</td>
                <td>45 - 47</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>12</td>
                <td>34 - 35</td>
                <td>42 - 43</td>
                <td>48 - 50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
