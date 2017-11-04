boxes = {
  "Win7IE10"  => "http://aka.ms/vagrant-win7-ie10",
  "Win7IE11"  => "http://aka.ms/vagrant-win7-ie11",
  "Win8IE10"  => "http://aka.ms/vagrant-win8-ie10",
  "Win8IE11"  => "http://aka.ms/vagrant-win81-ie11",
}


Vagrant.configure("2") do |config|
  boxes.each do |box, box_url|

    config.vm.define box, primary: box == "Win7IE10" do |node|
      node.vm.box = box
      node.vm.box_url = box_url
      node.vm.guest = :windows
      node.vm.communicator = "winrm"
      node.vm.provider "virtualbox" do |vm|
        vm.gui = true
      end
    end

  end
end
